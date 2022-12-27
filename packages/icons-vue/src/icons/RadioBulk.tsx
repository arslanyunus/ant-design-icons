// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadioBulkSvg from '@ant-design/icons-svg/lib/asn/RadioBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadioBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadioBulk: RadioBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadioBulkSvg}></AntdIcon>;
};

RadioBulk.displayName = 'RadioBulk';
RadioBulk.inheritAttrs = false;
export default RadioBulk;