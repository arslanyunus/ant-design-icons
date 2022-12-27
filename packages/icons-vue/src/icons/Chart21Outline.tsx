// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart21OutlineSvg from '@ant-design/icons-svg/lib/asn/Chart21Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart21OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart21Outline: Chart21OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart21OutlineSvg}></AntdIcon>;
};

Chart21Outline.displayName = 'Chart21Outline';
Chart21Outline.inheritAttrs = false;
export default Chart21Outline;