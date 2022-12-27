// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart21TwoToneSvg from '@ant-design/icons-svg/lib/asn/Chart21TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart21TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart21TwoTone: Chart21TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart21TwoToneSvg}></AntdIcon>;
};

Chart21TwoTone.displayName = 'Chart21TwoTone';
Chart21TwoTone.inheritAttrs = false;
export default Chart21TwoTone;