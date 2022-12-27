// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart2BulkSvg from '@ant-design/icons-svg/lib/asn/Chart2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart2Bulk: Chart2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart2BulkSvg}></AntdIcon>;
};

Chart2Bulk.displayName = 'Chart2Bulk';
Chart2Bulk.inheritAttrs = false;
export default Chart2Bulk;