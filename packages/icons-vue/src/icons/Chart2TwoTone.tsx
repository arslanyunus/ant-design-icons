// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Chart2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart2TwoTone: Chart2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart2TwoToneSvg}></AntdIcon>;
};

Chart2TwoTone.displayName = 'Chart2TwoTone';
Chart2TwoTone.inheritAttrs = false;
export default Chart2TwoTone;