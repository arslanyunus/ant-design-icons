// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart3BrokenSvg from '@ant-design/icons-svg/lib/asn/Chart3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart3Broken: Chart3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart3BrokenSvg}></AntdIcon>;
};

Chart3Broken.displayName = 'Chart3Broken';
Chart3Broken.inheritAttrs = false;
export default Chart3Broken;