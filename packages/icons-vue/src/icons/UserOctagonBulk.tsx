// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserOctagonBulkSvg from '@ant-design/icons-svg/lib/asn/UserOctagonBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserOctagonBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserOctagonBulk: UserOctagonBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserOctagonBulkSvg}></AntdIcon>;
};

UserOctagonBulk.displayName = 'UserOctagonBulk';
UserOctagonBulk.inheritAttrs = false;
export default UserOctagonBulk;