/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
const initialTravellers = [
  {
    id: 1, name: 'Jack', phone: 88885555,
    bookingTime: new Date(),
    passport: 'EL3083605',
    ticketType: 0,
    // ticketType has provide food and not provide food, which is two type, using 0 and 1 to represent. 
    emailAddress: '123@u.nus.edu',
  },
  {
    id: 2, name: 'Rose', phone: 88884444,
    bookingTime: new Date(),
    passport: 'EA3083604',
    ticketType: 0,
    emailAddress: 'rose@u.nus.edu',
  },
  {
    id: 3, name: 'John', phone: 88883333,
    bookingTime: new Date(),
    passport: 'EM3083603',
    ticketType: 1,
    emailAddress: 'johhhhh@u.nus.edu',
  },
  {
    id: 4, name: 'Panda', phone: 88882222,
    bookingTime: new Date(),
    passport: 'ED3083602',
    ticketType: 0,
    emailAddress: 'Pandaspan@u.nus.edu',
  },
  {
    id: 5, name: 'Lindy', phone: 88881111,
    bookingTime: new Date(),
    passport: 'EK3083601',
    ticketType: 1,
    emailAddress: 'Lindy@u.nus.edu',
  },
  {
    id: 6, name: 'Teenie', phone: 88887777,
    bookingTime: new Date(),
    passport: 'EZ3083600',
    ticketType: 1,
    emailAddress: 'lijiateenie@u.nus.edu',
  },
  {
    id: 7, name: 'Weenie', phone: 88889999,
    bookingTime: new Date(),
    passport: 'IL3083606',
    ticketType: 0,
    emailAddress: 'weenieThePooh@u.nus.edu',
  },
];


function TravellerRow(props) {
  {/*Q3. Placeholder to initialize local variable based on traveller prop.*/ }
  const { id, name, phone, bookingTime, passport, ticketType, emailAddress } = props.traveller;
  return (
    <tr>
      {/*Q3. Placeholder for rendering one row of a table with required traveller attribute values.*/}
      <td>{id}</td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{bookingTime.toLocaleString()}</td>
      <td>{passport}</td>
      <td>{ticketType}</td>
      <td>{emailAddress}</td>
    </tr>
  );
}

function Display(props) {

  /*Q3. Write code to render rows of table, reach corresponding to one traveller. Make use of the TravellerRow function that draws one row.*/
  const { travellers } = props;

  return (
    <table className="bordered-table" style={styles.table}>
      <thead>
        <tr>
          {/*Q3. Below table is just an example. Add more columns based on the traveller attributes you choose.*/}
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Booking Time</th>
          <th>Passport</th>
          <th>Ticket Type</th>
          <th>Email Address</th>
        </tr>
      </thead>
      <tbody>
        {/*Q3. write code to call the JS variable defined at the top of this function to render table rows.*/
          travellers.map(traveller => (
            <TravellerRow key={traveller.id} traveller={traveller} />
          ))
        }

      </tbody>
    </table>
  );
}

class Add extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
  }

  render() {
    return (
      <form name="addTraveller" onSubmit={this.handleSubmit}>
        {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
        <input type="text" name="travellername" placeholder="Name" />
        <button>Add</button>
      </form>
    );
  }
}


class Delete extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
    const form = document.forms.deleteTraveller;
    console.log(form.travellername.value);
    //code to delete the traveler.
    this.props.deletefunction(form.travellername.value);
  }

  render() {
    return (
      <form name="deleteTraveller" onSubmit={this.handleSubmit}>
        {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}

        <input type="text" name="travellername" placeholder="Name" />
        <button>Delete</button>
      </form>
    );
  }
}

class Homepage extends React.Component {
  constructor() {
    super();
  }
  render() {
    // train has 10 seats in total.
    const totalSeats = 10;
    const occupiedSeats = this.props.travellers.length;
    const freeSeats = totalSeats - occupiedSeats;

    return (
      <div>
        {/*Q2. Placeholder for Homepage code that shows free seats visually.*/}
        {/* <h1>Homepage</h1> */}
        <p>Total Seats: {totalSeats}</p>
        <p>Occupied Seats: {occupiedSeats}</p>
        <p>Free Seats: {freeSeats}</p>

        <div style={{ display: 'flex', gap: '10px' }}>{
          Array.from({ length: totalSeats }).map((_, index) => (
            <div
              key={index}
              style={{
                width: '30px',
                height: '30px',
                border: '2px solid black',
                backgroundColor: index < occupiedSeats ? 'grey' : 'green',
              }}
            ></div>
          ))
        }

        </div>

        <p>Note: Grey stands for occupied by others</p>
        <p>Green stands for still available</p>

      </div>);
  }
}
class TicketToRide extends React.Component {
  constructor() {
    super();
    this.state = { travellers: [], selector: 1 };
    this.bookTraveller = this.bookTraveller.bind(this);
    this.deleteTraveller = this.deleteTraveller.bind(this);
    this.setSelector = this.setSelector.bind(this);
  }

  setSelector(value) {
    /*Q2. Function to set the value of component selector variable based on user's button click.*/
    this.setState({ selector: value });
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    console.log(this.state.travellers)
  }

  loadData() {
    setTimeout(() => {
      this.setState({ travellers: initialTravellers });
    }, 500);
  }

  bookTraveller(passenger) {
    /*Q4. Write code to add a passenger to the traveller state variable.*/
  }

  deleteTraveller(passenger) {
    /*Q5. Write code to delete a passenger from the traveller state variable.*/
    console.log("deleteTraveler:", passenger);
    // actual deletion
    var newlist = []
    this.state.travellers.forEach(element => {
      if (element.name != passenger) { newlist.push(element) }
    });
    this.setState({ travellers: newlist });
    console.log(newlist);
    console.log(this.state.travellers);

  }
  render() {
    const { selector, travellers } = this.state;
    return (
      <div>
        <h1>Ticket To Ride</h1>
        <h4>This is a reservation system for the high-speed railway network that runs from Singapore to Thailand</h4>

        <div style={styles.navBar}>
          {/*Q2. Code for Navigation bar. Use basic buttons to create a nav bar. Use states to manage selection.*/}
          <button style={styles.button} onClick={() => this.setSelector(1)}>Homepage</button>
          <button style={styles.button} onClick={() => this.setSelector(2)}>Display Travellers</button>
          <button style={styles.button} onClick={() => this.setSelector(3)}>Add Traveller</button>
          <button style={styles.button} onClick={() => this.setSelector(4)}>Delete Traveller</button>
        </div>
        <div>
          {/*Only one of the below four divisions is rendered based on the button clicked by the user.*/}
          {/*Q2 and Q6. Code to call Instance that draws Homepage. Homepage shows Visual Representation of free seats.*/}
          {selector === 1 && <Homepage travellers={travellers} />}
          {/*Q3. Code to call component that Displays Travellers.*/}
          {selector === 2 && <Display travellers={travellers} />}

          {/*Q4. Code to call the component that adds a traveller.*/}
          {selector === 3 && <Add bookTraveller={this.bookTraveller} />}

          {/*Q5. Code to call the component that deletes a traveller based on a given attribute.*/}
          {selector === 4 && <Delete deletefunction={this.deleteTraveller} />}
          {/* <Delete deletefunction={this.deleteTraveller} /> */}
          {/* passing the deletefunction from parent's function */}

        </div>
      </div>
    );
  }
}

const element = <TicketToRide />;


const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '15px',
  },
  th: {
    padding: '12px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
    borderBottom: '3px solid #ddd',
  },
  td: {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '3px solid #ddd',
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '15px',
    padding: '15px',
    backgroundColor: '#C9E0F7',
  },
  button: {
    padding: '5px 15px',
    backgroundColor: '#6A6AEA',
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

ReactDOM.render(element, document.getElementById('contents'));
