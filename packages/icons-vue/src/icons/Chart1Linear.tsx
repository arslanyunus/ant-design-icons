// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart1LinearSvg from '@ant-design/icons-svg/lib/asn/Chart1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart1Linear: Chart1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart1LinearSvg}></AntdIcon>;
};

Chart1Linear.displayName = 'Chart1Linear';
Chart1Linear.inheritAttrs = false;
export default Chart1Linear;