// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Chart1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart1TwoTone: Chart1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart1TwoToneSvg}></AntdIcon>;
};

Chart1TwoTone.displayName = 'Chart1TwoTone';
Chart1TwoTone.inheritAttrs = false;
export default Chart1TwoTone;