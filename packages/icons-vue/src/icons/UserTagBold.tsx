// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserTagBoldSvg from '@ant-design/icons-svg/lib/asn/UserTagBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserTagBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserTagBold: UserTagBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserTagBoldSvg}></AntdIcon>;
};

UserTagBold.displayName = 'UserTagBold';
UserTagBold.inheritAttrs = false;
export default UserTagBold;