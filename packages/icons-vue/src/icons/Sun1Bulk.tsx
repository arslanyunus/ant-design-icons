// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Sun1BulkSvg from '@ant-design/icons-svg/lib/asn/Sun1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Sun1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Sun1Bulk: Sun1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Sun1BulkSvg}></AntdIcon>;
};

Sun1Bulk.displayName = 'Sun1Bulk';
Sun1Bulk.inheritAttrs = false;
export default Sun1Bulk;