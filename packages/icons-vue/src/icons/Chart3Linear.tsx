// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart3LinearSvg from '@ant-design/icons-svg/lib/asn/Chart3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart3Linear: Chart3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart3LinearSvg}></AntdIcon>;
};

Chart3Linear.displayName = 'Chart3Linear';
Chart3Linear.inheritAttrs = false;
export default Chart3Linear;