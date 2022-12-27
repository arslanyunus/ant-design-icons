// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceivedTwoToneSvg from '@ant-design/icons-svg/lib/asn/ReceivedTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceivedTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceivedTwoTone: ReceivedTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceivedTwoToneSvg}></AntdIcon>;
};

ReceivedTwoTone.displayName = 'ReceivedTwoTone';
ReceivedTwoTone.inheritAttrs = false;
export default ReceivedTwoTone;