// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserTickBulkSvg from '@ant-design/icons-svg/lib/asn/UserTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserTickBulk: UserTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserTickBulkSvg}></AntdIcon>;
};

UserTickBulk.displayName = 'UserTickBulk';
UserTickBulk.inheritAttrs = false;
export default UserTickBulk;