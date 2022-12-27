// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Chart1BoldSvg from '@ant-design/icons-svg/lib/asn/Chart1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Chart1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Chart1Bold: Chart1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chart1BoldSvg}></AntdIcon>;
};

Chart1Bold.displayName = 'Chart1Bold';
Chart1Bold.inheritAttrs = false;
export default Chart1Bold;