// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserTickOutlineSvg from '@ant-design/icons-svg/lib/asn/UserTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserTickOutline: UserTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserTickOutlineSvg}></AntdIcon>;
};

UserTickOutline.displayName = 'UserTickOutline';
UserTickOutline.inheritAttrs = false;
export default UserTickOutline;