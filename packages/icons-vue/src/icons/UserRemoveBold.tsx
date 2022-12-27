// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/UserRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserRemoveBold: UserRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserRemoveBoldSvg}></AntdIcon>;
};

UserRemoveBold.displayName = 'UserRemoveBold';
UserRemoveBold.inheritAttrs = false;
export default UserRemoveBold;