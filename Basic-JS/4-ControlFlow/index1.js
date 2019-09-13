// Switch & Case

let role = ''; // vkladam guest/moderator/-

switch (role) {
	case 'guest': // POZOR :
		console.log('Guest User');
		break; // VYSKOCI

	case 'moderator':
		console.log('Moderator User');
		break;

	default:
		console.log('Unknown User');
}

// to iste za pomoci IF/else...
if (role === 'guest') console.log('Guest');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown User');
