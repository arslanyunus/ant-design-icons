// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserSearchTwoToneSvg from '@ant-design/icons-svg/lib/asn/UserSearchTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserSearchTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserSearchTwoTone: UserSearchTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSearchTwoToneSvg}></AntdIcon>;
};

UserSearchTwoTone.displayName = 'UserSearchTwoTone';
UserSearchTwoTone.inheritAttrs = false;
export default UserSearchTwoTone;