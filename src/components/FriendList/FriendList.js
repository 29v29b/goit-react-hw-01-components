import css from './FriendList.module.css'
import { FriendListItem } from './FriendListItem/FriendListItem';
import PropTypes from "prop-types";

export const FriendList = ({friends}) => {
    return <ul className={css.friendlist}>
        {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
  </ul>
}

FriendList.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};