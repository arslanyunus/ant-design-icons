// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecordBulkSvg from '@ant-design/icons-svg/lib/asn/RecordBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecordBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecordBulk: RecordBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecordBulkSvg}></AntdIcon>;
};

RecordBulk.displayName = 'RecordBulk';
RecordBulk.inheritAttrs = false;
export default RecordBulk;