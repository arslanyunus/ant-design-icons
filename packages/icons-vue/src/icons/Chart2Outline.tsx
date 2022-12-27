// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart2OutlineSvg from '@ant-design/icons-svg/lib/asn/Chart2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart2Outline: Chart2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart2OutlineSvg}></AntdIcon>;
};

Chart2Outline.displayName = 'Chart2Outline';
Chart2Outline.inheritAttrs = false;
export default Chart2Outline;