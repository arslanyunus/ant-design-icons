// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart3BulkSvg from '@ant-design/icons-svg/lib/asn/Chart3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart3Bulk: Chart3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart3BulkSvg}></AntdIcon>;
};

Chart3Bulk.displayName = 'Chart3Bulk';
Chart3Bulk.inheritAttrs = false;
export default Chart3Bulk;