// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart1OutlineSvg from '@ant-design/icons-svg/lib/asn/Chart1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart1Outline: Chart1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart1OutlineSvg}></AntdIcon>;
};

Chart1Outline.displayName = 'Chart1Outline';
Chart1Outline.inheritAttrs = false;
export default Chart1Outline;