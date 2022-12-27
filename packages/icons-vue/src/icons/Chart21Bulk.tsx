// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart21BulkSvg from '@ant-design/icons-svg/lib/asn/Chart21Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart21BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart21Bulk: Chart21BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart21BulkSvg}></AntdIcon>;
};

Chart21Bulk.displayName = 'Chart21Bulk';
Chart21Bulk.inheritAttrs = false;
export default Chart21Bulk;