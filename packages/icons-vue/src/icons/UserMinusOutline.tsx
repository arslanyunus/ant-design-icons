// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserMinusOutlineSvg from '@ant-design/icons-svg/lib/asn/UserMinusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserMinusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserMinusOutline: UserMinusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserMinusOutlineSvg}></AntdIcon>;
};

UserMinusOutline.displayName = 'UserMinusOutline';
UserMinusOutline.inheritAttrs = false;
export default UserMinusOutline;