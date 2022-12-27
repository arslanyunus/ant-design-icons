// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityCardBulkSvg from '@ant-design/icons-svg/lib/asn/SecurityCardBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityCardBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityCardBulk: SecurityCardBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityCardBulkSvg}></AntdIcon>;
};

SecurityCardBulk.displayName = 'SecurityCardBulk';
SecurityCardBulk.inheritAttrs = false;
export default SecurityCardBulk;