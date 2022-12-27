// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserBulkSvg from '@ant-design/icons-svg/lib/asn/UserBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserBulk: UserBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserBulkSvg}></AntdIcon>;
};

UserBulk.displayName = 'UserBulk';
UserBulk.inheritAttrs = false;
export default UserBulk;