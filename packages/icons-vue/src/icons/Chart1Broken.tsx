// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart1BrokenSvg from '@ant-design/icons-svg/lib/asn/Chart1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart1Broken: Chart1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart1BrokenSvg}></AntdIcon>;
};

Chart1Broken.displayName = 'Chart1Broken';
Chart1Broken.inheritAttrs = false;
export default Chart1Broken;