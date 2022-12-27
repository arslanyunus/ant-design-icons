// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forward15SecondsBulkSvg from '@ant-design/icons-svg/lib/asn/Forward15SecondsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forward15SecondsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forward15SecondsBulk: Forward15SecondsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forward15SecondsBulkSvg}></AntdIcon>;
};

Forward15SecondsBulk.displayName = 'Forward15SecondsBulk';
Forward15SecondsBulk.inheritAttrs = false;
export default Forward15SecondsBulk;