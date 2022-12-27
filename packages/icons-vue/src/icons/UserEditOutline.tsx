// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserEditOutlineSvg from '@ant-design/icons-svg/lib/asn/UserEditOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserEditOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserEditOutline: UserEditOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserEditOutlineSvg}></AntdIcon>;
};

UserEditOutline.displayName = 'UserEditOutline';
UserEditOutline.inheritAttrs = false;
export default UserEditOutline;