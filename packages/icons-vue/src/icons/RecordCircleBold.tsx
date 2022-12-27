// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecordCircleBoldSvg from '@ant-design/icons-svg/lib/asn/RecordCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecordCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecordCircleBold: RecordCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecordCircleBoldSvg}></AntdIcon>;
};

RecordCircleBold.displayName = 'RecordCircleBold';
RecordCircleBold.inheritAttrs = false;
export default RecordCircleBold;