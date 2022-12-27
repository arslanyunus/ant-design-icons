// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecordCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/RecordCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecordCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecordCircleTwoTone: RecordCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecordCircleTwoToneSvg}></AntdIcon>;
};

RecordCircleTwoTone.displayName = 'RecordCircleTwoTone';
RecordCircleTwoTone.inheritAttrs = false;
export default RecordCircleTwoTone;