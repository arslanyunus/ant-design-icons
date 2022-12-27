// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecordCircleBulkSvg from '@ant-design/icons-svg/lib/asn/RecordCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecordCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecordCircleBulk: RecordCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecordCircleBulkSvg}></AntdIcon>;
};

RecordCircleBulk.displayName = 'RecordCircleBulk';
RecordCircleBulk.inheritAttrs = false;
export default RecordCircleBulk;