// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityTimeBulkSvg from '@ant-design/icons-svg/lib/asn/SecurityTimeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityTimeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityTimeBulk: SecurityTimeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityTimeBulkSvg}></AntdIcon>;
};

SecurityTimeBulk.displayName = 'SecurityTimeBulk';
SecurityTimeBulk.inheritAttrs = false;
export default SecurityTimeBulk;