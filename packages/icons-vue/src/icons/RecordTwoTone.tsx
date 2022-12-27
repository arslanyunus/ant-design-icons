// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecordTwoToneSvg from '@ant-design/icons-svg/lib/asn/RecordTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecordTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecordTwoTone: RecordTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecordTwoToneSvg}></AntdIcon>;
};

RecordTwoTone.displayName = 'RecordTwoTone';
RecordTwoTone.inheritAttrs = false;
export default RecordTwoTone;