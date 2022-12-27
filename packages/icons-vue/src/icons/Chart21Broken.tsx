// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart21BrokenSvg from '@ant-design/icons-svg/lib/asn/Chart21Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart21BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart21Broken: Chart21BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart21BrokenSvg}></AntdIcon>;
};

Chart21Broken.displayName = 'Chart21Broken';
Chart21Broken.inheritAttrs = false;
export default Chart21Broken;