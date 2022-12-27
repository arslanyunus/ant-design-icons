// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserOutlineSvg from '@ant-design/icons-svg/lib/asn/UserOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserOutline: UserOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserOutlineSvg}></AntdIcon>;
};

UserOutline.displayName = 'UserOutline';
UserOutline.inheritAttrs = false;
export default UserOutline;