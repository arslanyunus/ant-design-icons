// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlarmTwoToneSvg from '@ant-design/icons-svg/lib/asn/AlarmTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlarmTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlarmTwoTone: AlarmTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlarmTwoToneSvg}></AntdIcon>;
};

AlarmTwoTone.displayName = 'AlarmTwoTone';
AlarmTwoTone.inheritAttrs = false;
export default AlarmTwoTone;