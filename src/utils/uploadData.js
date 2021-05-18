const FirestoreService = require("firesrore-expor-import")
const serviceAccount = require("./serviceAccountKey.json")

const databaseURL = ""

FirestoreService.initializeApp(serviceAccount, databaseURL)
FirestoreService.restore("data.json")
