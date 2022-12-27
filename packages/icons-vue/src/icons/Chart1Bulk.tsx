// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart1BulkSvg from '@ant-design/icons-svg/lib/asn/Chart1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart1Bulk: Chart1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart1BulkSvg}></AntdIcon>;
};

Chart1Bulk.displayName = 'Chart1Bulk';
Chart1Bulk.inheritAttrs = false;
export default Chart1Bulk;