// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart21LinearSvg from '@ant-design/icons-svg/lib/asn/Chart21Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart21LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart21Linear: Chart21LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart21LinearSvg}></AntdIcon>;
};

Chart21Linear.displayName = 'Chart21Linear';
Chart21Linear.inheritAttrs = false;
export default Chart21Linear;