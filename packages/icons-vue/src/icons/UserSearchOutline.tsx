// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserSearchOutlineSvg from '@ant-design/icons-svg/lib/asn/UserSearchOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserSearchOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserSearchOutline: UserSearchOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSearchOutlineSvg}></AntdIcon>;
};

UserSearchOutline.displayName = 'UserSearchOutline';
UserSearchOutline.inheritAttrs = false;
export default UserSearchOutline;