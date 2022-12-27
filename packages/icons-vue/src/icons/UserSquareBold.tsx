// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserSquareBoldSvg from '@ant-design/icons-svg/lib/asn/UserSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserSquareBold: UserSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSquareBoldSvg}></AntdIcon>;
};

UserSquareBold.displayName = 'UserSquareBold';
UserSquareBold.inheritAttrs = false;
export default UserSquareBold;