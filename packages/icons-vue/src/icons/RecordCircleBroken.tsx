// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecordCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/RecordCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecordCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecordCircleBroken: RecordCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecordCircleBrokenSvg}></AntdIcon>;
};

RecordCircleBroken.displayName = 'RecordCircleBroken';
RecordCircleBroken.inheritAttrs = false;
export default RecordCircleBroken;