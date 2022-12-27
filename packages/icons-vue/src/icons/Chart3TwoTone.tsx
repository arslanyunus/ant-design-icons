// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart3TwoToneSvg from '@ant-design/icons-svg/lib/asn/Chart3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart3TwoTone: Chart3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart3TwoToneSvg}></AntdIcon>;
};

Chart3TwoTone.displayName = 'Chart3TwoTone';
Chart3TwoTone.inheritAttrs = false;
export default Chart3TwoTone;