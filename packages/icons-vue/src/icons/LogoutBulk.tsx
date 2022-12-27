// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LogoutBulkSvg from '@ant-design/icons-svg/lib/asn/LogoutBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LogoutBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LogoutBulk: LogoutBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LogoutBulkSvg}></AntdIcon>;
};

LogoutBulk.displayName = 'LogoutBulk';
LogoutBulk.inheritAttrs = false;
export default LogoutBulk;