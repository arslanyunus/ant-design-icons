// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecordBoldSvg from '@ant-design/icons-svg/lib/asn/RecordBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecordBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecordBold: RecordBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecordBoldSvg}></AntdIcon>;
};

RecordBold.displayName = 'RecordBold';
RecordBold.inheritAttrs = false;
export default RecordBold;