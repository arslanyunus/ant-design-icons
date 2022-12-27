// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart2LinearSvg from '@ant-design/icons-svg/lib/asn/Chart2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart2Linear: Chart2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart2LinearSvg}></AntdIcon>;
};

Chart2Linear.displayName = 'Chart2Linear';
Chart2Linear.inheritAttrs = false;
export default Chart2Linear;