// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecordBrokenSvg from '@ant-design/icons-svg/lib/asn/RecordBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecordBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecordBroken: RecordBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecordBrokenSvg}></AntdIcon>;
};

RecordBroken.displayName = 'RecordBroken';
RecordBroken.inheritAttrs = false;
export default RecordBroken;