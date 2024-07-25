import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';
import { ChatHistoryComponent } from './pages/chat-history/chat-history.component';
import { EditProfileComponent } from './pages/profile/edit-profile/edit-profile.component';
import { AddProfileComponent } from './pages/profile/add-profile/add-profile.component';

const routeConfig: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Home"
    },
    {
        path: "new-chat",
        component: ChatbotComponent,
        title: 'New Chat'
    },
    {
        path: "chat-history",
        component: ChatHistoryComponent,
        title: "Chat History"
    },
    {
        path: "add-profile",
        component: AddProfileComponent,
        title: "Add Profile"
    },
    {
        path: "edit-profile",
        component: EditProfileComponent,
        title: "Edit Profile"
    }
];

export default routeConfig;
