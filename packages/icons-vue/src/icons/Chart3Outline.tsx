// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart3OutlineSvg from '@ant-design/icons-svg/lib/asn/Chart3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart3Outline: Chart3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart3OutlineSvg}></AntdIcon>;
};

Chart3Outline.displayName = 'Chart3Outline';
Chart3Outline.inheritAttrs = false;
export default Chart3Outline;